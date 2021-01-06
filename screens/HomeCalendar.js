import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Agenda } from 'react-native-calendars';
import mockEventsWeek from '../mocks/mockEventsWeek';
import EventItem from '../components/EventItem';

const HomeCalendar = () => {
  const [items, setItems] = useState({});

  const loadItems = () => {
    setItems(mockEventsWeek);
    console.log(items);
  };

  const renderItem = (item) => {
    return (
      <EventItem
        eventTitle={item.name}
        eventTime={item.time}
        eventLocation={item.location}
      />
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <View style={styles.container}>
      <Agenda
        items={items}
        selected={'2020-01-01'}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        theme={{
          agendaDayTextColor: 'black',
          agendaDayNumColor: 'black',
          agendaDateBackground: 'white',
          // agendaTodayColor: '#97D8D8',
          // agendaKnobColor: '#b8b8b8',
          // calendarBackground: '#D9F1F1',
          backgroundColor: '#ffffff',
          // textSectionTitleColor: '#b6c1cd',
          // textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#6BC7C7',
          // selectedDayTextColor: '#ffffff',
          // todayTextColor: '#00adf5',
          // dayTextColor: '#2d4150',
          // textDisabledColor: '#d9e1e8',
          // dotColor: '#00adf5',
          // selectedDotColor: '#ffffff',
          // arrowColor: 'orange',
          // disabledArrowColor: '#d9e1e8',
          // monthTextColor: 'blue',
          // indicatorColor: 'blue',
          // textDayFontWeight: '300',
          // textMonthFontWeight: 'bold',
          // textDayHeaderFontWeight: '300',
          // textDayFontSize: 16,
          // textMonthFontSize: 16,
          // textDayHeaderFontSize: 16,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    backgroundColor: '#97D8D8',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    minHeight: 57.5,
  },
  eventItemText: {
    color: 'black',
    fontSize: 20,
  },
  emptyDate: {
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    minHeight: 57.5,
  },
  timeLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default HomeCalendar;
