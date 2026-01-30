const api="/api/workouts"

const form=document.getElementById("exerciseForm")
const table=document.getElementById("table")

async function load(){

const res=await fetch(api)
const data=await res.json()

table.innerHTML=""

data.forEach(w=>{

table.innerHTML+=`

<tr>
<td>${w.exercise}</td>
<td>${w.duration}</td>
<td>${w.calories}</td>
<td>${new Date(w.date).toLocaleDateString()}</td>

<td>

<button class="btn btn-primary btn-sm" onclick="edit('${w._id}')">Edit</button>

<button class="btn btn-danger btn-sm" onclick="del('${w._id}')">Delete</button>

</td>
</tr>

`

})

}

form.addEventListener("submit",async e=>{

e.preventDefault()

await fetch(api,{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({
exercise:exercise.value,
duration:duration.value,
calories:calories.value,
date:date.value
})
})

form.reset()
load()

})

async function del(id){

await fetch(api+"/"+id,{method:"DELETE"})
load()

}

async function edit(id){

const exercise=prompt("Exercise")
const duration=prompt("Duration")
const calories=prompt("Calories")
const date=prompt("Date yyyy-mm-dd")

if(!exercise)return

await fetch(api+"/"+id,{
method:"PUT",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({exercise,duration,calories,date})
})

load()

}

load()
