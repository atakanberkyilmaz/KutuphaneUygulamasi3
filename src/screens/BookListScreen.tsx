import React, { useState } from 'react';
import { View, FlatList, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import BookListItem from '../components/BookListItem';
import BookForm from '../components/BookForm';
import Book from '../types/Book';
import { deleteBook } from '../store/BookSlice';
import AddBookButton from '../components/AddBookButton';
import RNPickerSelect from 'react-native-picker-select';

const BookListScreen: React.FC = () => {
  const [isAddingBook, setIsAddingBook] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const books = useSelector((state: RootState) => state.book.books);

  const dispatch = useDispatch();

  const handleAddBook = () => {
    setSelectedBook(undefined);
    setIsAddingBook(true);
  };

  const handleEditBook = (book: Book) => {
    setSelectedBook(book);
    setIsAddingBook(true);
  };

  const handleDeleteBook = (bookId: string) => {
    dispatch(deleteBook(bookId));
  };

  const handleCancelAddBook = () => {
    setIsAddingBook(false);
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
  };

  const handleSort = (option: string) => {
    setSortOption(option);
  };

  const handleFilterChange = (value: string) => {
    setSelectedGenre(value);
  };

  let sortedBooks: Book[] = [...books];
  sortedBooks.sort((a, b) => {
    if (sortOption === 'titleAsc') {
      return a.title.localeCompare(b.title);
    } else if (sortOption === 'titleDesc') {
      return b.title.localeCompare(a.title);
    } else if (sortOption === 'isbnAsc') {
      return a.isbn.localeCompare(b.isbn);
    } else if (sortOption === 'isbnDesc') {
      return b.isbn.localeCompare(a.isbn);
    } else if (sortOption === 'authorAsc') {
      return a.authors[0].localeCompare(b.authors[0]);
    } else if (sortOption === 'authorDesc') {
      return b.authors[0].localeCompare(a.authors[0]);
    } else {
      return 0;
    }
  });

  const searchResults = sortedBooks.filter((book) => {
    return (
      book.title.toLowerCase().includes(searchText.toLowerCase()) ||
      book.isbn.includes(searchText) ||
      book.authors.join(', ').toLowerCase().includes(searchText.toLowerCase())
    );
  });

  const filteredBooks = selectedGenre
    ? searchResults.filter((book) => book.genre === selectedGenre)
    : searchResults;

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Arama yap..."
          value={searchText}
          onChangeText={handleSearch}
        />
        <View style={styles.sortByButtons}>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => handleSort('titleAsc')}
          >
            <Text style={styles.sortButtonText}>Kitap Adı (A-Z)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => handleSort('titleDesc')}
          >
            <Text style={styles.sortButtonText}>Kitap Adı (Z-A)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => handleSort('isbnAsc')}
          >
            <Text style={styles.sortButtonText}>ISBN (B-K)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sortButton}
            onPress={() => handleSort('isbnDesc')}
          >
            <Text style={styles.sortButtonText}>ISBN (K-B)</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sortByButtons}>
          <TouchableOpacity
            style={styles.authorButton}
            onPress={() => handleSort('authorAsc')}
          >
            <Text style={styles.sortButtonText}>Yazar(A-Z)</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.authorButton}
            onPress={() => handleSort('authorDesc')}
          >
            <Text style={styles.sortButtonText}>Yazar(Z-A)</Text>
          </TouchableOpacity>
        </View>
        <RNPickerSelect
          onValueChange={handleFilterChange}
          items={[
            { label: 'Tüm Türler', value: '' },
            { label: 'Roman', value: 'Roman' },
            { label: 'Bilim Kurgu', value: 'Bilim Kurgu' },
            { label: 'Fantastik', value: 'Fantastik ' },
          ]}
          value={selectedGenre}
          style={pickerSelectStyles}
        />
      </View>
      <FlatList
        data={filteredBooks}
        renderItem={({ item }) => (
          <BookListItem
            book={item}
            onPress={() => handleEditBook(item)}
            onDelete={() => handleDeleteBook(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      {isAddingBook ? (
        <BookForm book={selectedBook} onSubmit={handleCancelAddBook} />
      ) : null}
      <AddBookButton onPress={handleAddBook} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  sortByButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  sortButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderRadius: 2,
    marginHorizontal: 2,
  },
  authorButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  authorButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sortButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
  },
});

export default BookListScreen;
