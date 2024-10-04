import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000/api';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  getEmpleados(): Observable<any> {
    return this.http.get(`${API_URL}/empleados`);
  }

  addEmpleado(empleado: any): Observable<any> {
    return this.http.post(`${API_URL}/empleados`, empleado);
  }

  editEmpleado(id: number, empleado: any): Observable<any> {
    return this.http.put(`${API_URL}/empleados/${id}`, empleado);
  }

  deleteEmpleado(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/empleados/${id}`);
  }

  getDepartamentos(): Observable<any> {
    return this.http.get(`${API_URL}/departamentos`);
  }
}
