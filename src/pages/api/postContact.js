import * as fs from 'fs';
export default async function handler(req, res) {
    if (req.method === 'POST') {
        let files = await fs.promises.readdir('contactData');
        fs.promises.writeFile(`contactData/${files.length + 1}.json`, req.body);
        res.status(200).json(req.body);
    } else {
        res.status(200).json({ contacts: "all contacts" });
    }
}