import { act } from "react"

export const initialState={
fakeRecipes:[],
selectedRecipe:"",
title:"",
description:"",
image:"",
titleErr:false,
descriptionErr:false,
search:""
}


export const reducer = (state,action)=>{
    switch(action.type){
        case "recipesGet":
            return{
                ...state,
                fakeRecipes: action.payload
            }
        case "recipeAdd":
            const updatedRecipes =[...state.fakeRecipes,action.yeni]
            return{
                ...state,
                fakeRecipes: updatedRecipes

            }
        case "recipeEdit":
            const editRecipes = [state.fakeRecipes.map(recipe =>{
                if(recipe.id === state.selectedRecipe.id){
                    return{...action.yeni}
                }
                else{
                    return{...recipe}
                }

            })]
            return{
                ...state,
                fakeRecipes: editRecipes,
                selectedRecipe:""
            }
        case "recipeDelete":
            const updatedRecipes1 = [...state.fakeRecipes.filter(item => item.id!== action.id)]
            return{
                ...state,
                fakeRecipes:updatedRecipes1
            }
        case "cardEdit":
            const editCard = state.fakeRecipes.find(item=> item.id === action.id)
            return{
                ...state,
                selectedRecipe:editCard,
                title:editCard.title,
                description:editCard.description,
                image: editCard.image
            }
        case "setTitleErr":
            return{
                ...state,
                titleErr: action.payload
            }
        case "setDescriptionErr":
            return{
                ...state,
                setDescriptionErr: action.payload
            }
        case "title":
            return{
                ...state,
                title:action.payload
            }
        case "description":
            return{
                ...state,
                description:action.payload
            }
        case "image":
            return{
                ...state,
                image:action.payload
            }
        case"search":
            return{
                ...state,
                search:action.payload
            }
        case "resetForm":
            return{
                ...state,
                title:"",
                description:"",
                image:"",
            }
        case"selectedRecipe":
            return{
                ...state,
                selectedRecipe:action.payload
            }
    }
}