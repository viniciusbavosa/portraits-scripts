import { watch, readFile, writeFile } from 'node:fs/promises';
import { simpleGit } from 'simple-git';
import 'dotenv/config';

const options = {
  baseDir: process.cwd({ path: process.env.PATH }),
  binary: 'git',
  maxConcurrentProcesses: 6,
  trimmed: false,
};

const git = simpleGit(options);

(async () => {
  try {
    console.log('Vigiando a pasta')
    let id = 33;
   
    const folderToBeWatch = process.env.FOLDER_TOBE_WATCH;
    const fileToBeRead = process.env.FILE_TOBE_READ;
    const fileContentJSON = await readFile(fileToBeRead, { encoding: 'utf8' });
    const contentFormatted = await JSON.parse(fileContentJSON);

    const watcher = watch(folderToBeWatch);

    for await (const event of watcher) {
      if (event.eventType === 'rename' &&
        event.filename !== 'data.json') {

        id++;
        const newImage = {
          "id": id,
          "url": `/assets/MyPictures/${event.filename}`,
          "width": 370,
          "height": 370,
          "description": "",
          "alt": ""
        };

        if (Array.isArray(contentFormatted)) {
          contentFormatted.push(newImage);

          const newFileContent = JSON.stringify(contentFormatted);

          await writeFile(fileToBeRead, newFileContent);
          await git.add('.');
          await git.commit('New image', (err) => err && err);
          await git.push('origin', 'main', (err) => err && err);
          
        } else {
          throw new Error('O conteudo do arquivo JSON não é um array');
        };
      };
    };
  } catch (err) {
    if (err) throw err;
  };
})();