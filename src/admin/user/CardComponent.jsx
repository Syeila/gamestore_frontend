import React from 'react';

const CardComponent = () => {
  const cards = [
    {
      id: 1,
      title: 'Card Title 1',
      description: 'This is a description for card 1.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Card Title 2',
      description: 'This is a description for card 2.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Card Title 3',
      description: 'This is a description for card 3.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      title: 'Card Title 4',
      description: 'This is a description for card 4.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    // Tambahkan lebih banyak kartu jika diperlukan
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div key={card.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
