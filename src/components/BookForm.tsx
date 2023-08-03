import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBook, updateBook } from '../store/BookSlice';
import Book from '../types/Book';

interface BookFormProps {
  book?: Book;
  onSubmit: () => void;
}

const BookForm: React.FC<BookFormProps> = ({ book, onSubmit }) => {
  const [title, setTitle] = useState(book?.title || '');
  const [isbn, setIsbn] = useState(book?.isbn || '');
  const [authors, setAuthors] = useState(book?.authors.join(', ') || '');
  const [genre, setGenre] = useState(book?.genre || '');
  const [cover, setCover] = useState(book?.cover || '');
  const [description, setDescription] = useState(book?.description || '');

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newBook: Book = {
      id: book?.id || Math.random().toString(),
      title,
      isbn,
      authors: authors.split(',').map((author) => author.trim()),
      genre,
      cover,
      description,
    };

    if (book) {
      dispatch(updateBook(newBook));
    } else {
      dispatch(addBook(newBook));
    }

    onSubmit();
  };

  return (
    <View>
      <TextInput placeholder="Kitap Adı" value={title} onChangeText={setTitle} />
      <TextInput placeholder="ISBN Numarası" value={isbn} onChangeText={setIsbn} />
      <TextInput placeholder="Yazar" value={authors} onChangeText={setAuthors} />
      <TextInput placeholder="Tür" value={genre} onChangeText={setGenre} />
      <TextInput placeholder="Kitap Tanımı" value={description} onChangeText={setDescription} />
      <Button title={book ? 'Güncelle' : 'Ekle'} onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default BookForm;
