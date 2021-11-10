import axios from 'axios';
import { axiosInstance } from './service';

const EMPLOYEE_API_BASE_URL= ""

class EmployeeService{

    getEmployees(){

        const response =axiosInstance.get('http://localhost:8080'+'/employee',);
          console.log(response);
          return response;
    }

    createEmployee(employee){
        return axiosInstance.post('http://localhost:8080'+'/addemployees',employee);
    }

    getEmployeeByEmpId(employeeId){
        return axiosInstance.get( 'http://localhost:8080'+'/'+ employeeId);
    }

    updateEmployee(employee,id){

        return axiosInstance.put(EMPLOYEE_API_BASE_URL + '/update-employee/'+`${id}`,employee);

    }

    deleteEmployee(employeeId){
        return axiosInstance.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId)
    }

    getCasualValues(){
        return axiosInstance.get(EMPLOYEE_API_BASE_URL+'/casualvalue')
    }

    getMedicalValues(){
        return axiosInstance.get(EMPLOYEE_API_BASE_URL+'/medicalvalue')
    }

    getEmployeeCasualValues(casualempid){
        return axiosInstance.get(EMPLOYEE_API_BASE_URL+'/casualvalues/'+casualempid)
        console.log("Helllo")
    }

    getEmployeeMedicalValues(mediacalempid){
        return axiosInstance.get(EMPLOYEE_API_BASE_URL+'/medicalvalues/'+mediacalempid)
    }

    getIndividualShortHAlfDetails(){
        const response = axiosInstance.get(EMPLOYEE_API_BASE_URL+'/employeeShortHalfLeaves')
        return response;
    }

  async  getEmployeeId(fullName){
      const res = await axiosInstance.get(EMPLOYEE_API_BASE_URL+'/getEmpId/'+fullName)
      return res;
    }

  async  getEmployeesByCategory(){

        const response =await axiosInstance.get('http://localhost:8080'+'/employees',);
          console.log(response);
          return response;
    }

}


export default new EmployeeService()