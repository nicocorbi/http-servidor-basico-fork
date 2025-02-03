
        const users = [
  {
    nombre: "admin",
    password: "admin",
    email: "admin@email.com",
    status: "active"
  },
  {
    nombre: "user",
    password: "user",
    email: "user@email.com",
    status: "inactive",
    age: 32
  },
  {
    nombre: "user2",
    password: "user2",
    email: "user2@email.com",
    status: "banned",
    age: 32
  }
]

const productos = [
  {
    id: 1,
    nombre: "pan",
    precio: "2$",
    stock: 20
  },
  {
    id: 2,
    nombre: "pasteles",
    precio: "8$",
    stock: 5
  },
  {
    id: 3,
    nombre: "bocadillo",
    precio: "5$",
    stock: 100
  }
]

function createTable(list, func) {
    if (!list || list.length === 0) {
        console.warn("No hay datos para mostrar.");
        return null;
    }

    const keys = Object.keys(list[0]);
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    // Crear cabecera
    const tr = document.createElement('tr');
    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        tr.appendChild(th);
    });
    thead.appendChild(tr);

    // Crear cuerpo
    list.forEach(item => {
        const tr = document.createElement('tr');
        keys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = item[key];
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
        func(tr, item);
    });

    // Agregar cabecera y cuerpo a la tabla
    table.appendChild(thead);
    table.appendChild(tbody);

    return table; // Ahora sí devuelve la tabla
}



createTable(users,(tr,item) =>{
  if(item["status"]=== "active") tr.style.background = "green"
   if(item["status"]=== "banned") tr.style.background = "blue"
     if(item["status"]=== "inactive") tr.style.background = "red"
})

createTable(productos, (tr, item) => {
  if(item["stock"] <= 5) tr.style.background = "red"
   if(item["stock"] >= 15) tr.style.background = "yellow"
   if(item["stock"] >= 50) tr.style.background = "green"
})
