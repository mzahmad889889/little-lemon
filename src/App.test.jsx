// Import statements for testing
import { initializeTimes, availableTimesReducer } from './App';

// Test suite for the initializeTimes function
describe('initializeTimes function', () => {
  // Test case for initializeTimes
  it('should return the correct array of times', () => {
    // Call initializeTimes function
    const times = initializeTimes();

    // Expected array of times
    const expectedTimes = [
      '17:00',
      '18:00',
      '19:00',
      '20:00',
      '21:00',
      '22:00',
    ];

    // Assert that times matches the expected array of times
    expect(times).toEqual(expectedTimes);
  });
});

// Test suite for the updateTimes function
describe('updateTimes function', () => {
  // Test case for updateTimes
  it('should return the same value as provided in the state', () => {
    // Mock initial state
    const initialState = ['17:00', '18:00'];

    // Mock action object
    const action = {
      type: 'UPDATE_TIMES',
      availableTimes: ['19:00', '20:00'],
    };

    // Call reducer function with initial state and action
    const newState = availableTimesReducer(initialState, action);

    // Assert that newState is equal to the availableTimes provided in the action
    expect(newState).toEqual(action.availableTimes);
  });
});