export const initialState={
    kitaplar: [],
    kategoriler: [],
    secilenKategori:"Tüm Kitaplar",
    secilenKitap:"",
    kitapAdi:"",
    kitapYazari:"",
    kitapKategorisi:"Kategori Seçiniz",
    kitapSayfaSayisi:"",
    kitapResmi:"",
    kitapAciklamasi:"",
    search:""


}

export const reducer = (state,action)=>{
    switch (action.type) {
        //case_1
        case "kitaplariGetir":
            return{
                ...state,
                kitaplar: action.payload
            }
        //case_2   
        case "kategorileriGetir":
            return{
                ...state,
                kategoriler: action.payload
            } 
        //case_3
        case "resetForm":
            return{
                ...state,
                kitapAdi:"",
                kitapYazari:"",
                kitapKategorisi:"Kategori Seçiniz",
                kitapSayfaSayisi:"",
                kitapResmi:"",
                kitapAciklamasi:""
            } 
        //case_4
        case"secilenKategori":
            return{
                ...state,
                secilenKategori:action.payload
            }
        //case_5
        case"search":
            return{
                ...state,
                search:action.payload
            }
        //case_6
        case"kitapAdi":
            return{
                ...state,
                kitapAdi: action.payload
            }
        //case_7
        case"kitapYazari":
            return{
                ...state,
                kitapYazari: action.payload
            }
        //case_8
        case"kitapKategorisi":
            return{
                ...state,
                kitapKategorisi: action.payload
            }
        //case_9
        case"kitapSayfaSayisi":
            return{
                ...state,
                kitapSayfaSayisi: action.payload
            }
        //case_10
        case"kitapResmi":
            return{
                ...state,
                kitapResmi: action.payload
            }
        //case_11
        case"kitapAciklamasi":
            return{
                ...state,
                kitapAciklamasi: action.payload
            }
        //case_12
        case"kitapEkle":
        const guncelKitaplar = [...state.kitaplar,action.yeni]
            return{
                ...state,
                kitaplar: guncelKitaplar
            }
        //case_13
        case"kitapSil":
        const guncelKitaplar1 = [...state.kitaplar.filter(item =>item.id !== action.id)]
            return{
                ...state,
                kitaplar: guncelKitaplar1
            }
        //case_14
        case"cardDuzenle":
        const duzenlenecekKitap = state.kitaplar.find(item => item.id === action.id)
            return{
                ...state,
                secilenKitap: duzenlenecekKitap,
                kitapAdi:duzenlenecekKitap.kitapAdi,
                kitapYazari:duzenlenecekKitap.kitapYazari,
                kitapKategorisi:duzenlenecekKitap.kitapKategorisi,
                kitapSayfaSayisi:duzenlenecekKitap.kitapSayfaSayisi,
                kitapResmi:duzenlenecekKitap.kitapResmi,
                kitapAciklamasi:duzenlenecekKitap.kitapAciklamasi,

            }
        //case_15
        case"kitapDuzenle":
        const editKitaplar = state.kitaplar.map(kitap =>{
            if(kitap.id === state.secilenKitap.id)
                {
                return {...action.yeni}
            }

            else{
                return{...kitap}
            }

        })
            return{
                ...state,
                kitaplar: editKitaplar,
                secilenKitap:""
            }

    }
}