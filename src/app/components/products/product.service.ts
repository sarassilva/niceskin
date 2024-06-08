import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private apiUrl = 'http://localhost:3000/products';
  
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(products => products.find(product => product.id === id)),
      catchError(() => of(null)) 
    );
  }

}