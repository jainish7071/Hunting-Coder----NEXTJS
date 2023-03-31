import * as fs from 'fs';
export default async function handler(req, res) {
  let data = await fs.promises.readdir("./blogdata");
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const fileName = data[index];
    let blog = await fs.promises.readFile(`./blogdata/${fileName}`, 'utf-8');
    allBlogs.push(JSON.parse(blog));
  }
  res.status(200).json(allBlogs);
}
