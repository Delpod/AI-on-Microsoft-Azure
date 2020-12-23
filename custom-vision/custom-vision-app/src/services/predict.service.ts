import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PredictService {
  constructor(private http: HttpClient) {}

  sendUrl(url: string): Promise<any> {
    return this.http.post('https://custom-vision-dl.cognitiveservices.azure.com/customvision/v3.0/Prediction/d9028cc1-bfcd-46cb-b414-13b0e302ea38/detect/iterations/better-prediction/url', { Url: url }, { headers: { 'Prediction-Key': 'c0ac9b426efb458facfac59e93098521' }}).toPromise();
  }

  sendFile(file: any): Promise<any> {
    return this.http.post('https://custom-vision-dl.cognitiveservices.azure.com/customvision/v3.0/Prediction/d9028cc1-bfcd-46cb-b414-13b0e302ea38/detect/iterations/better-prediction/image', file, { headers: { 'Content-Type': 'application/octet-stream', 'Prediction-Key': 'c0ac9b426efb458facfac59e93098521' } }).toPromise();
  }

  searchRecipes(ingredients: Array<string>): Promise<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${ingredients.join(',')}`).toPromise();
  }

  findMore(id: string): Promise<any> {
    return this.http.get(`https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${id}`).toPromise();
  }
}