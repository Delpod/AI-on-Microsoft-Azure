import { Component } from '@angular/core';
import { PredictService } from 'src/services/predict.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  url: string;
  visibleUrl: string;
  isValidUrl = true;
  predictions = [];
  activePredictions = {};
  requestWaiting = false;
  recipes = [];
  file: any;
  
  constructor(public predictService: PredictService) {}

  onUrlChange() {
    this.isValidUrl = /^https?:\/\/.+\..+/.test(this.url);
  }

  toBase64(file): any {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  onFileChange(files) {
    this.file = files.item(0);
  }

  async sendFileClick() {
    if (this.file) {
      this.visibleUrl = await this.toBase64(this.file);
      this.activePredictions = {};
      this.predictions = [];
      this.recipes = []
      this.requestWaiting = true;
      this.predictService.sendFile(this.file).then((result => {
        const sums = {};
        for (let i = 0; i < result.predictions.length; ++i) {
          if (sums[result.predictions[i].tagName]) {
            sums[result.predictions[i].tagName] += result.predictions[i].probability;
          } else {
            sums[result.predictions[i].tagName] = result.predictions[i].probability;
          }
        }
        const tagArray = [];

        for (let k of Object.keys(sums)) {
          tagArray.push({ key: k, value: sums[k] });
        }

        this.predictions = tagArray.filter(a => a.value > 0.15).sort((a, b) => b.value - a.value);
        this.activePredictions[0] = true;

        this.requestWaiting = false;
        console.log(this.predictions);
      })).catch(err => {
        this.requestWaiting = false;
        console.error(err);
      });
    }
  }

  sendUrlClick() {
    if (this.url && this.isValidUrl) {
      this.activePredictions = {};
      this.predictions = [];
      this.recipes = []
      this.visibleUrl = this.url;
      this.requestWaiting = true;
      this.predictService.sendUrl(this.url).then((result => {
        const sums = {};
        for (let i = 0; i < result.predictions.length; ++i) {
          if (sums[result.predictions[i].tagName]) {
            sums[result.predictions[i].tagName] += result.predictions[i].probability;
          } else {
            sums[result.predictions[i].tagName] = result.predictions[i].probability;
          }
        }
        const tagArray = [];

        for (let k of Object.keys(sums)) {
          tagArray.push({ key: k, value: sums[k] });
        }

        this.predictions = tagArray.filter(a => a.value > 0.15).sort((a, b) => b.value - a.value);
        this.activePredictions[0] = true;

        this.requestWaiting = false;
        console.log(this.predictions);
      })).catch(err => {
        this.requestWaiting = false;
        console.error(err);
      });
    }
  }

  togglePredictionIndex(i: number) {
    this.activePredictions[i] = !this.activePredictions[i];
  }

  searchRecipes() {
    const usedIngredients = this.predictions.filter((a, i) => this.activePredictions[i]).map(v => v.key);
    this.predictService.searchRecipes(usedIngredients).then(result => {
      this.recipes = result.meals;
    });
  }

  findMore(i: number) {
    this.predictService.findMore(this.recipes[i].idMeal).then(result => {
      const ingredients = [];
      for (let i = 0; i < 20; ++i) {
        if (!result.meals[0][`strIngredient${i+1}`]) {
          break;
        }

        ingredients.push(result.meals[0][`strMeasure${i + 1}`] + ' ' + result.meals[0][`strIngredient${i + 1}`]);
      }

      this.recipes[i].ingredients = ingredients;
      this.recipes[i].instruction = result.meals[0].strInstructions;
      this.recipes[i].urlYoutube = result.meals[0].strYoutube;
    });
  }
}
