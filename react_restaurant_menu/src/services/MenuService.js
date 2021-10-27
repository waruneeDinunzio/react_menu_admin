import axios from 'axios';

const MENU_API_BASE_URL= "http://localhost:8080/api";
class MenuService{

    getMenus(){
       return axios.get(MENU_API_BASE_URL+"/allmenus");
    }

    createMenu(menu){
        return axios.post(MENU_API_BASE_URL+"/addmenu",menu);
    }

    getMenuById(id){
        return axios.get(MENU_API_BASE_URL+"/menu/"+id);
    }

    updateMenu(menu,id){
        return axios.put(MENU_API_BASE_URL+"/menu/"+id,menu);
    }

    deleteMenu(id){
        return axios.delete(MENU_API_BASE_URL+"/menu/"+id);
    }

}

export default new MenuService();