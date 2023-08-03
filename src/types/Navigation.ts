import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  BookList: undefined;
  BookDetail: { bookId: string };
  BookForm: undefined;
};


export type BookListScreenRouteProp = RouteProp<RootStackParamList, 'BookList'>;
export type BookDetailScreenRouteProp = RouteProp<RootStackParamList, 'BookDetail'>;

export type BookListScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BookList'>;
export type BookDetailScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BookDetail'>;
