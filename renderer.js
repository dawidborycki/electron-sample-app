const axios = require('axios');
const $ = require('jquery');

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

function fetchData() {
  axios.get(apiUrl)
    .then((response) => {
      const data = response.data;

      // Clear the existing table data
      $('#data-table tbody').empty();

      // Append new data to the table
      data.forEach((item) => {
        $('#data-table tbody').append(`
          <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.body}</td>
          </tr>
        `);
      });
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
}

// Fetch data on page load
//fetchData();

// Add click event listener to the fetch button
$('#fetch-button').click(() => {
  fetchData();
});
