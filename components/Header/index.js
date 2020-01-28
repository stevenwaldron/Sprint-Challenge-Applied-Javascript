// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    let header = document.createElement('div');
    let date = document.createElement('span');
    let h1 = document.createElement('h1');
    let temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    date.textContent = 'MARCH 28, 2019';
    h1.textContent = 'Lambda Times';
    temp.classList.add('temp');
    temp.textContent = '98°';

    header.appendChild(date);
    header.appendChild(h1);
    header.appendChild(temp);

    return header;

}

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
