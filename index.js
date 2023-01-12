import { speak } from './node_modules/say/index';
// import say from 'say';

btn.onclick = () => {
    console.log(1);

    new Promise((resole) => {
        speak('侯毅哥哥', null, null, () => {
            resole();
        });
    }).then(() => {
        speak('鸡你太美，只因你太美');
    });
}