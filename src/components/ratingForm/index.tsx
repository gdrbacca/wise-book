import Image from 'next/image'
import { Rating } from '../books/Rating'
import {
  ButtonForm,
  Container,
  ErroSubmit,
  RatingFormFooter,
  RatingFormHeader,
  RatingText,
} from './styles'
import { Check, X } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '@/lib/axios'

interface RatingFormProps {
  userId: string | undefined
  bookId: string | undefined
  name: string | undefined
  cover_url: string | undefined
  avaliar: () => void
  create: () => void
}

const ratingFormSchema = z.object({
  ratingText: z
    .string()
    .min(3, { message: 'Avaliação deve ter pelo menos 3 caracteres.' }),
})

type ratingFormData = z.infer<typeof ratingFormSchema>

export function RatingForm(userInfo: RatingFormProps) {
  const [textLength, setTextLength] = useState(0)
  const [counter, setCounter] = useState(0)

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
    reset,
    setError,
  } = useForm<ratingFormData>({
    resolver: zodResolver(ratingFormSchema),
  })

  function handlerTextArea(event: ChangeEvent<HTMLTextAreaElement>) {
    setTextLength(event.currentTarget.value.length)
  }

  function handlerClearForm() {
    setTextLength(0)
    reset()
  }

  async function handlerSubmitRating(data: ratingFormData) {
    if (counter === 0) {
      setError('ratingText', {
        message: 'Deve avaliar o livro com ao menos uma estrela.',
      })
    } else {
      await api.post('/rating-post', {
        userId: userInfo.userId,
        bookId: userInfo.bookId,
        ratingText: data.ratingText,
        rate: counter,
      })
      userInfo.avaliar()
      userInfo.create()
      console.log({
        userId: userInfo.userId,
        bookId: userInfo.bookId,
        ratingText: data.ratingText,
        rating: counter,
      })
    }
  }

  return (
    <Container onSubmit={handleSubmit(handlerSubmitRating)}>
      <RatingFormHeader>
        <div>
          <Image
            src={
              userInfo.cover_url ? userInfo.cover_url : '/placeholder-image.png'
            }
            alt=""
            width={40}
            height={40}
          />

          <h1>{userInfo.name}</h1>
        </div>

        <Rating size={24} setCounting={setCounter} />
      </RatingFormHeader>
      <RatingText>
        <textarea
          maxLength={450}
          placeholder="Escreva sua avaliação"
          {...register('ratingText')}
          onChange={handlerTextArea}
        ></textarea>

        <span>{textLength}/450</span>
        {errors.ratingText?.message && (
          <ErroSubmit>{errors.ratingText?.message}</ErroSubmit>
        )}
      </RatingText>
      <RatingFormFooter>
        <ButtonForm type="reset" color={'purple'} onClick={handlerClearForm}>
          <X size={22} />
        </ButtonForm>
        <ButtonForm type="submit" color={'green'} disabled={isSubmitting}>
          <Check size={22} />
        </ButtonForm>
      </RatingFormFooter>
    </Container>
  )
}
