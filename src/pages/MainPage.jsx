import React, { useState } from 'react';
import mainStyles from './MainPage.module.scss';
import spin from '../images/wheel-spin.png';
import img1 from '../images/PngItem_1493413-min.png';
import img2 from '../images/PngItem_2044616-min.png';
import img3 from '../images/PngItem_323681-min.png';
import img4 from '../images/PngItem_672035-min.png';
import img5 from '../images/PngItem_771561-min.png';
import img6 from '../images/clipart144773-min.png';
import img7 from '../images/clipart159591-min.png';
import img8 from '../images/clipart1757645-min.png';
import img9 from '../images/clipart460380-min.png';
import img10 from '../images/dlf.pt-monster-eyes-png-626605-min.png';
import img11 from '../images/pngfind.com-creepy-smile-png-1532555-min.png';
import img12 from '../images/pngfind.com-frankenstein-png-2854092-min.png';
import img13 from '../images/pngfind.com-funny-face-png-283673-min.png';
import img14 from '../images/pngfind.com-funny-mouth-png-6769350-min.png';
import img15 from '../images/pngfind.com-funny-png-517441-min.png';
import img16 from '../images/pngfind.com-funny-pokemon-png-3425349-min.png';
import img17 from '../images/pngfind.com-halloween-border-png-1718615-min.png';
import img18 from '../images/pngfind.com-halloween-monster-png-3417155-min.png';
import img19 from '../images/pngfind.com-hookah-png-507024-min.png';
import img20 from '../images/pngfind.com-kingdom-hearts-png-443050-min.png';
import img21 from '../images/pngfind.com-monster-teeth-png-2001809-min.png';
import img22 from '../images/pngfind.com-ninja-mask-png-3097723-min.png';
import img23 from '../images/pngfind.com-scared-face-png-144010-min.png';
import img24 from '../images/pngfind.com-scary-face-png-39978-min.png';
import img25 from '../images/pngfind.com-scary-face-png-41405-min.png';
import mov from '../images/clipart21611.png';
import bat from '../images/bat.png';
import bats from '../images/bats.png';
// import img26 from '../images/sticker.png';
import casper from '../images/casper.png';

const firstNames = ["Кучерявий", "Агресивний", "Няшний", "Бешкетний", "Бородатий", "Баляндрасний", "Беззубий", "Бомбезний", "Відморожений", "Недокопчений", "Кульний", "Волохатий", "Тощий", "Тютюкнутий", "Відчайдушний", "Грайливий", "Гальмований", "Невсобішний", "Безглуздий", "Неголений", "Лопуховий", "Балакучий", "Гутаперчевий"  ];
const secondNames = ['Тихоня', 'Койот', 'Баг', 'Гоблін', "Тюхтій", "Пуцьвірінок", "Буслик", "Звіздуляй", "Манюн", "Посіпака", "Чуперадлик", "Чупакабр", "Зяблик", "Теревеник", "Вподобайка", "Фрик", "Корисняк", "Фейк", "Дедлайн", "Сирник", "Усміхайлик", "Живчик", "Цвіркун", "Слимак", "Громило"  ];

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  // img26,
];

const getRandomValue = array => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const MainPage = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (!spinning) {
      setSpinning(true);

      // Generate a random number of rotations (e.g., between 1 and 4 rotations)
      const randomRotations = 1 + Math.floor(Math.random() * 4);

      // Generate a random angle for rotation (between 0 and 360 degrees)
      const randomAngle = Math.floor(Math.random() * 360);

      // Calculate the total angle to rotate
      const totalRotation = randomRotations * 360 + randomAngle; // 360 degrees in 1 rotation

      setRotation(totalRotation);

      // Simulate stopping after a delay (e.g., 3 seconds)
      setTimeout(() => {
        const selectedHero = {
          firstName: getRandomValue(firstNames),
          secondName: getRandomValue(secondNames),
          image: getRandomValue(images),
        };
        setResult(selectedHero);
        setSpinning(false);
      }, 3000); // 3000 milliseconds (3 seconds)
    }
  };

  const wheelStyle = {
    transform: `rotate(${rotation}deg)`,
    transition: spinning ? 'transform 3s ease-in-out' : 'none',
  };

  return (
    <div className={mainStyles.block}>
      <div className={mainStyles.block__welcome}>
        <img
          src={spin}
          alt="Spin"
          id="spin"
          className={mainStyles.block__img__wheel}
          style={wheelStyle}
        />
        <button
          type="button"
          onClick={spinWheel}
          className={mainStyles.block__btn}
        >
          Click
        </button>
        <div
          className={mainStyles.block__result}
          style={{ display: result ? 'block' : 'none' }}
        >
          {result && (
            <div>
              <img
                src={result.image}
                alt="Hero"
                id="heroImage"
                className={mainStyles.block__result__img}
              />
              <p id="heroName" className={mainStyles.block__hero }>{`${result.firstName} ${result.secondName}`}</p>
            </div>
          )}
        </div>
      </div>
      <div>
        <img
          className={mainStyles.block__mov}
          src={mov}
          alt="mouse"
          width={150}
        />
        <img
          className={mainStyles.block__mov__return}
          src={bats}
          alt="mouse"
          width={250}
        />
        <img
          className={mainStyles.block__bat}
          src={bat}
          alt="mouse"
          width={450}
        />

        <img
          className={mainStyles.block__bat1}
          src={bat}
          alt="mouse"
          width={450}
        />
        <img
          className={mainStyles.block__casper}
          src={casper}
          alt="casper"
          width={150}
        />
      </div>
    </div>
  );
};

export default MainPage;
