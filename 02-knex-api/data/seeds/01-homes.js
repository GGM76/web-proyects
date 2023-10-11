/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('homes').truncate()
  await knex('homes').insert([
    {
      house_id: '1',
      title: 'Cozy Apartment in the City Center',
      description: 'A charming apartment in the heart of the city.',
      guests: '2',
      address: '123 Main Street',
      rental_price: '100'
    },
    {
      house_id: '2',
      title: 'Beachfront Villa with Stunning Views',
      description: 'A luxurious villa with direct access to the beach.',
      guests: '8',
      address: '456 Ocean Avenue',
      rental_price: '500'
    },
    {
      house_id: '3',
      title: 'Spacious Loft in Historic District',
      description: 'A stylish loft in a vibrant and historic neighborhood.',
      guests: '4',
      address: '789 Elm Street',
      rental_price: '200'
    },
    {
      house_id: '4',
      title: 'Mountain Cabin Retreat',
      description: 'A cozy cabin nestled in the mountains.',
      guests: '6',
      address: '321 Pine Road',
      rental_price: '300'
    },
    {
      house_id: '5',
      title: 'Modern Condo with Panoramic City Views',
      description: 'A sleek and modern condo with breathtaking views.',
      guests: '3',
      address: '987 Walnut Avenue',
      rental_price: '150'
    },
    {
      house_id: '6',
      title: 'Rustic Farmhouse in the Countryside',
      description: 'A charming farmhouse surrounded by nature.',
      guests: '10',
      address: '654 Farm Lane',
      rental_price: '400'
    },
    {
      house_id: '7',
      title: 'Luxury Penthouse in the Heart of Downtown',
      description: 'An upscale penthouse with all the amenities.',
      guests: '4',
      address: '321 Main Street',
      rental_price: '600'
    },
    {
      house_id: '8',
      title: 'Secluded Cottage by the Lake',
      description: 'A peaceful cottage with stunning lake views.',
      guests: '2',
      address: '654 Lake Road',
      rental_price: '250'
    },
    {
      house_id: '9',
      title: 'Historic Brownstone in the City',
      description: 'A beautifully restored brownstone in a prime location.',
      guests: '6',
      address: '987 Elm Street',
      rental_price: '350'
    },
    {
      house_id: '10',
      title: 'Beach Bungalow Steps from the Sand',
      description: 'A cozy bungalow just a short walk from the beach.',
      guests: '4',
      address: '123 Ocean Avenue',
      rental_price: '200'
    },
    {
      house_id: '11',
      title: 'Ski Chalet with Mountain Views',
      description: 'A charming chalet with easy access to the slopes.',
      guests: '8',
      address: '456 Mountain Road',
      rental_price: '400'
    },
    {
      house_id: '12',
      title: 'Modern Loft in the City Center',
      description: 'A stylish loft in a trendy urban neighborhood.',
      guests: '2',
      address: '789 Main Street',
      rental_price: '150'
    },
    {
      house_id: '13',
      title: 'Private Villa with Infinity Pool',
      description: 'A luxurious villa with a private pool and stunning views.',
      guests: '10',
      address: '321 Ocean Avenue',
      rental_price: '800'
    },
    {
      house_id: '14',
      title: 'Cozy Cabin in the Woods',
      description: 'A secluded cabin surrounded by nature.',
      guests: '4',
      address: '654 Pine Road',
      rental_price: '200'
    },
    {
      house_id: '15',
      title: 'Chic Apartment with City Skyline Views',
      description: 'A modern apartment with a balcony overlooking the city.',
      guests: '3',
      address: '987 Elm Street',
      rental_price: '175'
    },
    {
      house_id: '16',
      title: 'Quaint Cottage in a Quaint Town',
      description: 'A charming cottage in a picturesque village.',
      guests: '2',
      address: '123 Maple Avenue',
      rental_price: '150'
    },
    {
      house_id: '17',
      title: 'Historic Mansion with Old-World Charm',
      description: 'A grand mansion with period details and elegant decor.',
      guests: '12',
      address: '456 Main Street',
      rental_price: '1000'
    },
    {
      house_id: '18',
      title: 'Lakefront Retreat with Private Dock',
      description: 'A serene retreat with direct access to the lake.',
      guests: '6',
      address: '789 Lake Road',
      rental_price: '350'
    },
    {
      house_id: '19',
      title: 'Modern Townhouse in the City',
      description: 'A sleek and contemporary townhouse in a prime location.',
      guests: '4',
      address: '321 Elm Street',
      rental_price: '300'
    },
    {
      house_id: '20',
      title: 'Beach House with Ocean Views',
      description: 'A spacious beach house with panoramic views of the sea.',
      guests: '8',
      address: '654 Ocean Avenue',
      rental_price: '500'
    },
    {
      house_id: '21',
      title: 'Cozy Log Cabin in the Mountains',
      description: 'A rustic cabin with a warm and inviting atmosphere.',
      guests: '4',
      address: '987 Pine Road',
      rental_price: '250'
    },
    {
      house_id: '22',
      title: 'Luxury Condo with Resort-Style Amenities',
      description: 'An upscale condo with a pool, gym, and more.',
      guests: '2',
      address: '123 Walnut Avenue',
      rental_price: '400'
    },
    {
      house_id: '23',
      title: 'Tranquil Farmhouse with Scenic Views',
      description: 'A peaceful farmhouse surrounded by fields and meadows.',
      guests: '6',
      address: '456 Farm Lane',
      rental_price: '300'
    },
    {
      house_id: '24',
      title: 'Penthouse Suite with City Skyline Views',
      description: 'A luxurious suite with floor-to-ceiling windows.',
      guests: '2',
      address: '789 Main Street',
      rental_price: '600'
    },
    {
      house_id: '25',
      title: 'Lake Cottage with Private Beach',
      description: 'A charming cottage with a secluded beach on the lake.',
      guests: '4',
      address: '321 Lake Road',
      rental_price: '300'
    },
    {
      house_id: '26',
      title: 'Historic Townhouse in the Heart of the City',
      description: 'A beautifully preserved townhouse with period features.',
      guests: '8',
      address: '654 Elm Street',
      rental_price: '500'
    },
    {
      house_id: '27',
      title: 'Beachfront Condo with Stunning Ocean Views',
      description: 'A modern condo with a balcony overlooking the beach.',
      guests: '4',
      address: '987 Ocean Avenue',
      rental_price: '350'
    },
    {
      house_id: '28',
      title: 'Ski-In, Ski-Out Chalet on the Mountain',
      description: 'A cozy chalet with direct access to the ski slopes.',
      guests: '6',
      address: '123 Mountain Road',
      rental_price: '400'
    },
    {
      house_id: '29',
      title: 'Urban Oasis in the City Center',
      description: 'A tranquil retreat in the midst of the urban jungle.',
      guests: '2',
      address: '456 Main Street',
      rental_price: '200'
    },
    {
      house_id: '30',
      title: 'Private Island with Luxury Villa',
      description: 'An exclusive island with a lavish villa and private beach.',
      guests: '12',
      address: '789 Island Road',
      rental_price: '10000'
    }
  ])
}
