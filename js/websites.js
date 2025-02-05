function Listeners() {
    let cubes = document.getElementById('arrow');
    cubes.addEventListener('click', scroll);
}
function scroll(){
    alert('scrolling');
    console.log('scrolling');
}
function test(){
fetch('list-files.php')
  .then((response) => response.json())
  .then((files) => {
    const fileList = document.getElementById('file-list');
    files.forEach((file) => {
      const listItem = document.createElement('li');
      listItem.textContent = file;
      fileList.appendChild(listItem);
    });
  })
  .catch((error) => console.error('Error fetching files:', error));
}
Listeners();
test();