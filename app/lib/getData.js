import { readdir } from 'node:fs/promises';

export const getFileData = async () => {
    const path ='/Users/ippo542/Documents/nextjs-dashboard/public'
  try {
    const files = await readdir(path);
    for (const file of files) console.log(file);
  } catch (err) {
    console.error(err);
  }
};
