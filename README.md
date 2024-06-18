
#Wise-Book

Último projeto da trilha de React da RocketSeat

## Getting Started

```bash
npm install
```

É necessário criar um .env e preencher as seguintes variáveis:

•DATABASE_DIRECT_URL e DATABASE_URL com os dados de acesso do seu banco de dados  Postgres

Com o banco de dados configurado, execute o comando
```bash
npx prisma db seed
```

•GOOGLE_CLIENT_ID e GOOGLE_CLIENT_SECRET, você deve configurar um projeto do https://console.cloud.google.com/

•GITHUB_CLIENT_ID e GITHUB_CLIENT_SECRET, você deve configurar em https://github.com/

•NEXTAUTH_SECRET, dê uma string qualquer, exemplo: "gASghF7dDDgfgg4hdfHDFsdYhdfjkfd58eGHrd0/Pms="

•NEXTAUTH_URL, se for usar localhost: 'http://localhost:3000'


Para executar, use o seguinte comando:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu browser.

