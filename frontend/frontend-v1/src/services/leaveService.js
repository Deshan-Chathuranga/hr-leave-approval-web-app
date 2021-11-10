import { FcDataConfiguration } from 'react-icons/fc';
import { axiosInstance } from './service';

class LeaveService{

    applyLeave(leave){
        return axiosInstance.post('/apply_leave',leave); 
    }

    //Get Acting officer all notifications
    async getAllNotification() {
        const response = await axiosInstance.get('/acting-officers')
        return response;
    }

    async getHODAllNotifications() {
        const res = await axiosInstance.get('/hodNotifications')
        return res;
    }

    addshorthalfleave(ob){
        return axiosInstance.post('/shorthalfleaves',ob); 
    }

    updateLeave(leave,id){
        return axiosInstance.put('/update-leave/'+`${id}`,leave);
    }

    updateActingOfficerLeaveStatus(leave,id){
        return axiosInstance.put('/update-actingOfficerStatus/'+`${id}`,leave);
    }
  async  getShorthalfleaves(){

        const response =await axiosInstance.get('/getShortLeaves');
          console.log(response);
          return response;
    }

    saveShortHalfLeaves(leave){
        return axiosInstance.post('/shorthalfleaves',leave)
    }

  async  getEmployeeIndividualLeaves(){
       const response= await axiosInstance.get('/getEmployeeLeaves')
       console.log(response)
       return response;
    }

    async getAllLeaves(){
        const response= await axiosInstance.get('/getAllLeaves')
        console.log(response)
        return response;
    }

    addELeaves(leaves){
        return axiosInstance.post('/addELeaves',leaves)
    }

 async   getALLELeaves(){
    
        const response = await axiosInstance.get('/getELeaves')
        return response;

    }

    async getIndividualHODNotification(leaveid){
          const response = await axiosInstance.get('/individual/'+leaveid)
          return response
    }

    async getMonthlyValues(monthid){
       
        const response = await axiosInstance.get('/monthly/'+monthid)
        return response;
    }
}

export default new LeaveService()