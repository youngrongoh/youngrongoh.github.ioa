import { Liquid } from 'liquidjs';
import defineElement from '../../components/header';

function pushContents(target, content) {
  target.innerHTML = content;
}

function importMarkdown(postname) {
  return new Promise((resolve, reject) => {
    import(`assets/posts/${postname}.md`)
      .then((module) => resolve(module.default))
      .catch(reject);
  })
}

function mapPath(postname) {
  console.log(postname);
  history.replaceState(null, document.title, postname);
}

function getPostname() {
  return location.hash.replace('#', '');
}

function setTitle(post) {
  document.title = `${document.title} | ${post}`;
}

(async function init() {
  const contents = document.querySelector('#contents');
  const postname = getPostname();
  const parsedMd = await importMarkdown(postname);
  mapPath(postname);
  setTitle(postname);
  pushContents(contents, parsedMd)
  defineElement();
})()