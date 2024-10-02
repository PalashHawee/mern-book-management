import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 dark:bg-slate-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="max-w-3xl bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Our Bookstore</h2>
        <p className="mb-4 text-gray-700">
          At Our Bookstore, we believe in the transformative power of reading. Our mission is to provide a wide selection of books that inspire, educate, and entertain. Whether you're looking for the latest bestseller, a classic novel, or an educational resource, we have something for everyone.
        </p>
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="mb-4 text-gray-700">
          We aim to create a welcoming space for readers of all ages. Our knowledgeable staff is passionate about books and is always available to help you find the perfect read. We also host events, book signings, and community gatherings to bring book lovers together.
        </p>
        <h3 className="text-xl font-semibold mb-2">Meet the Team</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">
            <strong>Jane Doe</strong> - Founder & CEO: A lifelong book lover, Jane started this bookstore to share her passion with the community.
          </li>
          <li className="mb-2">
            <strong>John Smith</strong> - Head of Sales: With a keen eye for trends, John ensures we have the best selection of books available.
          </li>
          <li className="mb-2">
            <strong>Emily Johnson</strong> - Events Coordinator: Emily organizes our community events, bringing authors and readers together.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
