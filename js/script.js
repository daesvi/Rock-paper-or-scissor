// Obteniene id

const play = document.getElementById('play')
const inicio = document.getElementById('inicio')
const instructions = document.getElementById('instructions')
const instructions_game = document.getElementById('instructions_game')
const back = document.getElementById('back')
const go = document.getElementById('go')
const instructions_game_continue = document.getElementById('instructions_game_continue')

// Inicio
document.addEventListener('DOMContentLoaded',()=>{
    inicio.hidden = false;
    instructions_game.hidden = true;
    instructions_game_continue.hidden = true;
    back.hidden = true;
})

// Esconde el lobby
play.addEventListener('click',()=>{
    inicio.hidden = true;
    instructions_game.hidden = true;
    instructions_game_continue.hidden = true;
    back.hidden = true;
})

// Muestra iniciación a las instrucciones
instructions.addEventListener('click',()=>{
    back.hidden = false;
    inicio.hidden = true;
    instructions_game.hidden = false;
    instructions_game_continue.hidden = true;
})

// Vuelve al inicio
back.addEventListener('click',()=>{
    inicio.hidden = false;
    instructions_game.hidden = true;
    instructions_game_continue.hidden = true;
    back.hidden = true;
})

// Continúa a las instrucciones
go.addEventListener('click',()=>{
    inicio.hidden = true;
    instructions_game.hidden = true;
    instructions_game_continue.hidden = false;
    back.hidden = false;
})


