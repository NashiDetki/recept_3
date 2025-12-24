const card_1 = document.querySelector(".card_item1");
const card_2 = document.querySelector(".card_item2");
const card_3 = document.querySelector(".card_item3");
const popup = document.querySelector(".popup")
const popupTite = document.querySelector(".popup_title")
const popupText = document.querySelector(".popup_text")
const popupButtonExit = document.querySelector(".popup_button-exit")
const titleCard1 = card_1.querySelector(".cards_title")
const titleCard2 = card_2.querySelector(".cards_title")
const titleCard3 = card_3.querySelector(".cards_title")

function openPopup(elementPopup){
    elementPopup.classList.add("popup_opened")
}


function closePopup(elementPopup){
    elementPopup.classList.remove("popup_opened")
}

popupButtonExit.addEventListener("click",function(){
closePopup(popup)
})

card_1.addEventListener("click",function(){
    console.log(titleCard1.textContent)
    popupTite.textContent = titleCard1.textContent
    popupText.textContent = `15 ноября в мире отмечают День шоколадного кекса.
Как выяснилось, известная во всем мире сладкая выпечка может похвалиться давней историей. 
Появилось это гастрономическое кулинарное чудо еще в Древнем Риме. 
В те времена людям нравилось перемешивать между собой ядра орехов, гранат, 
изюм и другие ингредиенты, которые особо приходились по вкусу, с ячменным пюре. 
Но в то далекое время сей кулинарный изыск еще не получил своего теперешнего названия. 
Кекс начал называться кексом в Средние века. Особую популярность десерт, по мнению ученых, 
обрел в XVI столетии. В тот же период был изобретен сахарный песок. Его привозили в Европу из Америки.`
    console.log(popupTite.textContent)
    openPopup(popup)
})

card_2.addEventListener("click",function(){
    console.log(titleCard2.textContent)
    popupTite.textContent = titleCard2.textContent
    popupText.textContent = `Печенье появилось одновременно с хлебом. Но соревноваться с ним в популярности не могло. 
Небольшие кусочки смеси муки с водой выкладывались в печь перед выпеканием хлеба. 
Так кулинары проверяли, достаточно ли она разогрета. Потом эти куски съедались, но без большого удовольствия. 
Потому что тогда выпечка была пресной — в Европе не было сахара. Первые письменные упоминания о печенье 
зафиксированы в 7 веке д.н.э. Находки указывают, что ранние аналоги современного десерта изготавливались в Персии. 
Вот там выпечка стала сахарной — потому что на Востоке был сахарный тростник.`
    console.log(popupTite.textContent)
    openPopup(popup)
})

card_3.addEventListener("click",function(){
      console.log(popupTite.textContent)
      popupTite.textContent = titleCard3.textContent
      popupText.textContent = `Первая версия гласит, что трюфели были созданы кондитером Луи Дюфуру в 1895 году 
в результате поиска новых рецептов десертов. По второй версии конфеты получились в результате ошибочного 
сочетания ингредиентов учеником известного кулинара Огюста Эскофье в 1920 году. Достоверно известно, 
что родиной трюфелей является Франция.`
    console.log(titleCard3.textContent) 
    openPopup(popup)
})


// popup.classList.add("popup_opened")
// function setHello(name) {
//     let greating = "darova" + name
//     return greating
// }

// console.log(setHello(" nikitos"))