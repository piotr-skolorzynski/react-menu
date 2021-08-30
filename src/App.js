import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

//przykład wykorzystania obiektu Set to stworzenia kategorii, Set może mieć tylko unikalne itemy także można go wykorzystać jako tablicę do stworzenia przycisków
//dodatkowo chcemy zrobić z niego tablicę oraz dodać kategorię all

const allCategories = ['all', ...new Set(items.map(item => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = category => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
     const newItems = items.filter(item => item.category === category);
     setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
