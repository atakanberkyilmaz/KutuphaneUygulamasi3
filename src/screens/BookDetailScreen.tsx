import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import Book from '../types/Book';

interface BookDetailScreenProps {
  route: {
    params: {
      bookId: string;
    };
  };
}

const BookDetailScreen: React.FC<BookDetailScreenProps> = ({ route }) => {
  const { bookId } = route.params;
  const book = useSelector((state: RootState) => state.book.books.find((b) => b.id === bookId));

  if (!book) {
    return (
      <View>
        <Text>Kitap bulunamadı!</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{book.title}</Text>
      <Text>{book.isbn}</Text>
      <Text>{book.authors.join(', ')}</Text>
      <Text>{book.genre}</Text>
      <Text>{book.description}</Text>
    </View>
  );
};

export default BookDetailScreen;
