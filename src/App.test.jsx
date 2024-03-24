// import { initializeTimes, availableTimesReducer } from './App';
// import { vi } from 'vitest'

// describe('initializeTimes function', () => {
//   // Test case for initializeTimes
//   it('should return the correct array of times', async () => {
//     // Mock the response of fetchAPI
//     const originalFetchAPI = vi.fn().fetchAPI(Promise.resolve(['14:00', '15:00', '16:00']));
//     // Call initializeTimes function
//     const times = await initializeTimes();

//     // Restore the original fetchAPI function
//     window.fetchAPI = originalFetchAPI;

//     // Expected array of times
//     const expectedTimes = ['14:00', '15:00', '16:00'];

//     // Assert that times matches the expected array of times
//     expect(times).toEqual(expectedTimes);
//   });
// });

// // Test suite for the updateTimes function
// describe('updateTimes function', () => {
//   // Test case for updateTimes
//   it('should update available times based on the provided date', () => {
//     // Mock initial state
//     const initialState = [];

//     // Mock action object with available times for a specific date
//     const action = {
//       type: 'UPDATE_TIMES',
//       availableTimes: ['17:00', '18:00'],
//     };

//     // Call reducer function with initial state and action
//     const newState = availableTimesReducer(initialState, action);

//     // Assert that newState is equal to the availableTimes provided in the action
//     expect(newState).toEqual(action.availableTimes);
//   });
// });
