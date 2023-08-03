import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Book from '../types/Book';


interface BookListItemProps {
  book: Book;
  onPress: () => void;
  onDelete: () => void;
}
const BookListItem: React.FC<BookListItemProps> = ({ book, onPress, onDelete, }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.cover} source={book.cover ? { uri: book.cover } : require("../components/default_cover.png")} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.description}>Kitap Tanımı: {book.description}</Text>
        <Text style={styles.authors}>Yazar: {book.authors.join(', ')}</Text>
        <Text style={styles.genre}>Tür: {book.genre}</Text>
        <Text style={styles.isbn}>ISBN: {book.isbn}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.editButton} onPress={onPress}>
          <Text style={styles.buttonText}>Düzenle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.buttonText}>Sil</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    cover: {
      width: 80,
      height: 120,
      marginRight: 16,
      borderRadius: 4,
    },
    infoContainer: {
      fontSize: 14,
      flex: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    authors: {
      fontSize: 14,
      color: '#888',
    },
    genre: {
      fontSize: 14,
      color: '#888',
    },
    isbn: {
      fontSize: 14,
      color: '#888',
    },
    description:{
        fontSize: 14,
      color: '#888',
    },
    actionsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonsContainer: {
        position: 'absolute',
        bottom: 8, 
        right: 8, 
        flexDirection: 'row',
        alignItems: 'center',
      },
    editButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 4,
      marginRight: 8,
    },
    deleteButton: {
      backgroundColor: '#f44336',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 4,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 12,
    },
  });
  
  export default BookListItem;
  