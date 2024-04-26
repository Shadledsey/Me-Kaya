const menu = [
    {
        id: 1,
        title: "General Chemistry for Engineers",
        category: "Books",
        price: 400,
        img: "https://ars.els-cdn.com/content/image/3-s2.0-C20150059561-cov200h.gif",
        desc: `Author: Jeffrey S. Gaffney and Nancy A.Marley`,
    },
    {
        id: 2,
        title: "Differential and Integral Calculus 6th edition ",
        category: "Books",
        price: 169,
        img: "https://ph-live-01.slatic.net/p/101feecd987f02c38bd9550517876ff2.jpg",
        desc: `Author: Clyde E. Love & Earl D. Rainville`,
    },
    {
        id: 3,
        title: "Differential and Integral Calculus 6th edition ",
        category: "Books",
        price: 169,
        img: "https://ph-live-01.slatic.net/p/101feecd987f02c38bd9550517876ff2.jpg",
        desc: `Author:  Clyde E. Love & Earl D. Rainville `,
    },
    {
        id: 4,
        title: "THERMODYNA MICS 1 ",
        category: "E-Book",
        price: 249,
        img: "https://ph-test-11.slatic.net/p/b5f995b072f61f15029d54c6ee708e04.jpg",
        desc: `Authors: Hipolito B.
        Sta. Maria & Dante V.
        Gedaria`,
    },
    {
        id: 5,
        title: "Thermodynamics 2",
        category: "E-Book",
        price: 170,
        img: "https://ph-test-11.slatic.net/p/b5f995b072f61f15029d54c6ee708e04.jpg",
        desc: ` Hipolito B. Maria, Raymundo M. Melegrito, Nelson M. Pasamonte, Renato M.Siapno`
        
    },
    {
        id: 6,
        title: "Engineering Mechanics: Statics",
        category: "Books",
        price: 230,
        img: "https://pictures.abebooks.com/isbn/9789810681340-us.jpg",
        desc: ` Engineering Mechanics series offered in most university-level engineering programs, covering fundamental concepts such as vector analysis, forces, moments, static equilibrium, internal reactions, and the properties of geometric shapes. `,
    },
    {
        id: 7,
        title: "Engineering Mechanics: Statics and Dynamics (3rd edition)",
        category: "Books",
        price: 249,
        img: "https://filebroker-cdn.lazada.com.ph/kf/S43cdf4025fba42a18a2e9eb528fc7f392.jpg",
        desc: `Author: Ferdinand L. Singer`,
    },
    {
        id: 8,
        title: "Fluid Mechanics and Hydraulics 4th Edition",
        category: "Books",
        price: 210,
        img: "https://img.lazcdn.com/g/p/98a752a941390c219b8f422644fc66b2.jpg_720x720q80.jpg",
        desc: `Author: DIT Gillesania`,
    },
    {
        id: 9,
        title: "Mark's Standard Handbook for Engineers,12th Edition 12th Edition",
        category: "E-Book",
        price: 50,
        img: "https://m.media-amazon.com/images/I/71MNYqwEtmL._AC_UF1000,1000_QL80_.jpg",
        desc: `Updated Material: The 12th edition incorporates the latest industry standards, codes, and practices.`,
    },
    {
        id: 10,
        title: "Heat and Mass Transfer: Fundamentals and Applications, 5th Edition ",
        category: "E-Book",
        price: 50,
        img: "https://m.media-amazon.com/images/I/61KcRxgn+cL._AC_UF1000,1000_QL80_.jpg",
        desc: `Updated Material: The 12th edition incorporates the latest industry standards, codes, and practices. New sections cover
        emerging technologies,
        sustainability, and digital
        tools`,
    },
    {
        id: 11,
        title: "Strength of Materials (4th Edition)",
        category: "Books",
        price: 199,
        img: "https://i0.wp.com/www.engineering-math.org/wp-content/uploads/2023/05/Solution-Manual-Cover-1.png?resize=625%2C809&ssl=1",
        desc: ` A comprehensive study of the behavior of solid objects subjected to various types of loading and environmental conditions, covering topics such as stresses and strains, stress-strain relations, elastic limits, and the mechanical properties of materials, providing essential knowledge for engineers and scientists in a variety of fields`,
    },
    {
        id: 12,
        title: "Fundamentals of Vibration",
        category: "Books",
        price: 199,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4lRoORrFv4Qhq6Q2-KlWj1p7ycj2sPBVf72WPpW3Frg&s",
        desc:  `  A masterfully crafted textbook suitable for introductory to graduate-level courses, providing a comprehensive coverage of mechanical vibrations theory.`,
    },
    {
        id: 13,
        title: "Design of Machine Elements (4th Edition)",
        category: "Books",
        price: 169,
        img: "https://cdn.gintaa.com/offers/image/202245/18ace843MUJR6VCHlkvymt/2RUn8HpNM5flHJ7WjJ1fXj_Kaagaz202204051528029343928.jpg",
        desc: `Author: Virgil Moring
        Faires`,
    },
    {
        id: 14,
        title: "Refrigeration and Air  Conditioning (3rd edition)",
        category: "Books",
        price: 149,
        img: "https://images-eu.ssl-images-amazon.com/images/I/81WfBjfrjbL._AC_UL210_SR210,210_.jpg",
        desc: `Hipolito B. Sta. Maria`,
    },
    {
        id: 15,
        title: "Refrigeration and Air  Conditioning (3rd edition)",
        category: "Books",
        price: 169,
        img: "https://images-na.ssl-images-amazon.com/images/P/0070665915.01.LZZZZZZZ.jpg",
        desc: `By: Wilbert F. Stoecker
        Jerold W. Jones`,
    },
    {
        id: 16,
        title: "Engineering Economy (3rd edition",
        category: "Books",
        price: 179,
        img: "https://img.lazcdn.com/g/ff/kf/Sc703499733d841c48fb09c813cb0256cE.jpg_720x720q80.jpg",
        desc: `An application of fundamental concepts and methods of economic evaluation, emphasizing efficient spreadsheet use and coverage of personal financial situations where engineering economy techniques can be readily applied   .`,
    },
    {
        id: 17,
        title: "Machine Design: A Simplified Approach ",
        category: "Books",
        price: 149,
        img: "https://imgv2-1-f.scribdassets.com/img/document/443434526/original/e035f91e0a/1707099414?v=1",
        desc: `A comprehensive and simplified approach to machine design, offering valuable insights and practical techniques for optimal servomotor control and addressing the complexities involved in the conversion of machines with servo technology to meet performance expectations.`,
    },
    {
        id: 18,
        title: "Power Plant Engineering",
        category: "E-Book",
        price: 189,
        img: "https://filebroker-cdn.lazada.com.ph/kf/S3f0b9a08bf6045cba7e006478be97aeaY.jpg",
        desc: `theory and practice of stationary electric generating plants, covering the design and engineering aspects of power plants, making it a valuable resource for engineers and students in the field of power generation and distribution.`,
    },
    {
        id: 19,
        title: "Power Plant Engineering  Updated Version",
        category: "E-Book",
        price: 199,
        img: "https://ph-test-11.slatic.net/p/19b3d2afc8666bac4a1ae3aa85ad8900.jpg",
        desc: `By: J.A. Mandawe &
        R.S. Capote`,
    },
    {
        id: 20,
        title: "Power Plant Theory and Design, 2nd Edition ",
        category: "E-Book",
        price: 499,
        img: "https://imgv2-2-f.scribdassets.com/img/document/514073561/original/0cfa400641/1710395740?v=1",
        desc: `By: Philip J. Potter`,
    },
    {
        id: 21,
        title: "Prime’s Industrial Plant  Engineering",
        category: "Books",
        price: 270,
        img: "https://filebroker-cdn.lazada.com.ph/kf/Sa75b874d218d41119bb90b30c443c938Q.jpg",
        desc: `By: Wilbert F. Stoecker
        Jerold W. Jones`,
    },
    {
        id: 22,
        title: "Electropneumati cs Basic Level ",
        category: "E-Book",
        price: 50,
        img: "https://img.yumpu.com/20797298/1/500x640/electropneumatics-basic-level-festo-didactic.jpg",
        desc: ` introduction to the principles and applications of electropneumatics, providing a solid foundation for understanding the integration of electrical and pneumatic systems in modern industrial automation.`,
    },
    {
        id: 23,
        title: "R.S. Capote, C.G.  Duaso, J.A. Mandawe",
        category: "Books",
        price: 169,
        img: "https://filebroker-cdn.lazada.com.ph/kf/S829075f9b05a4d198e3d81982b74555fB.jpg",
        desc: `A collection of engineering formulas and principles, providing valuable resources for mechanical engineering students and professionals.





        `,
    },
  ];

const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

window.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(menu);
    displayMenuButtons();
});

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map((item) => {
        return `<article class="menu-item">
            <img src="${item.img}" alt="" class="photo">
            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">₱${item.price}</h4>
                </header>
                <p class="item-text">
                    ${item.desc}
                </p>
                <div class="buy-button">
                    <button class="buy-btn">Buy Now</button>
                </div>
            </div>
        </article>`;
    }).join("");
    sectionCenter.innerHTML = displayMenu;
    addBuyButtonEventListeners();
}

function displayMenuButtons() {
    const categories = menu.reduce((unique, item) => {
        if (!unique.includes(item.category)) {
            unique.push(item.category);
        }
        return unique;
    }, ['all']);

    const displayBtn = categories.map((category) => {
        return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
    }).join("");
   
    container.innerHTML = displayBtn;
    addFilterButtonEventListeners();
}

function addBuyButtonEventListeners() {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            const productName = e.currentTarget.closest('.menu-item').querySelector('h4').textContent;
            alert(`You have purchased ${productName}`);
        });
    });
}


function addFilterButtonEventListeners() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.id;
            const menuCategory = category === 'all' ? menu : menu.filter((menuItem) => menuItem.category === category);
            displayMenuItems(menuCategory);
        });
    });
}
