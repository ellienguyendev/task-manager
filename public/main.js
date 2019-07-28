var star = document.getElementsByClassName("fa-star");
var completed = document.getElementsByClassName("fa-times-circle");
var reassign = document.getElementsByClassName("reassign");

Array.from(star).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const task = this.parentNode.parentNode.childNodes[7].innerText

    fetch('starred', {
        method: 'put',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'task': task,
          'assign': name,
          'starred': "yes"
        })
      })
      .then(response => {
        if (response.ok) return response.json()
      })
      .then(data => {
        console.log(data)
        window.location.reload(true)
      })
  });
});

Array.from(completed).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const task = this.parentNode.parentNode.childNodes[7].innerText

    fetch('completed', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'task': task,
        'assign': name
      })
    }).then(function(response) {
      window.location.reload()
    })
  });
});

Array.from(reassign).forEach(function(element) {
  element.addEventListener('click', function() {
    const name = this.parentNode.parentNode.childNodes[1].innerText
    const task = this.parentNode.childNodes[7].innerText

    if (this.innerText === "Team") {
      fetch('reassignTeam', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task,
            'assign': name,
            'starred': "no"
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    } else if (this.innerText === "Del") {
      fetch('reassignDel', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task,
            'assign': name,
            'starred': "no"
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    } else if (this.innerText === "Leon") {
      fetch('reassignLeon', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task,
            'assign': name,
            'starred': "no"
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    } else if (this.innerText === "Stephanie") {
      fetch('reassignStephanie', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task,
            'assign': name,
            'starred': "no"
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    } else if (this.innerText === "Muigai") {
      fetch('reassignMuigai', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task,
            'assign': name,
            'starred': "no"
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    } else if (this.innerText === "Rougui") {
      fetch('reassignRougui', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task,
            'assign': name,
            'starred': "no"
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    } else if (this.innerText === "Nick") {
      fetch('reassignNick', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'task': task,
            'assign': name,
            'starred': "no"
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
    }
  });
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth();
var yyyy = today.getFullYear();
var monthName
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
today = monthNames[mm] + ' ' + dd + ', ' + yyyy;
document.querySelector('.date').innerHTML = today
