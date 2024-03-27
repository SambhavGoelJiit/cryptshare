## Getting Started

make '.env.local' file in root directory and add the below lines to it:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZWxlZ2FudC1wb255LTgwLmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_dmlGIfItd6c5yX2Pn5Jt2liknRRaJMl2i2NpmmR8Bg

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

NEXT_PUBLIC_BASE_URL="http://localhost:3000/"
```

Install docker 
run following commands in terminal inside root directory only(cryptshare) one by one:

```bash
docker build .

docker image ls

docker run -p 3000:3000 <your_image_id>
```
to stop (docker ps gives image name) it is some random name given at last
```bash
docker ps
```
```bash
docker stop <image_name>
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
