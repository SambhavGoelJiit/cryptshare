## Getting Started

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
