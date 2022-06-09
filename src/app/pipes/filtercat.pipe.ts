import { Category } from './../models/category';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercat'
})
export class FiltercatPipe implements PipeTransform {

  transform(value: Category[], categoryfilterText: string): Category[] {
    categoryfilterText = categoryfilterText?categoryfilterText.toLocaleLowerCase():""
    return categoryfilterText?value
    .filter((t:Category)=>t.name.toLocaleLowerCase().indexOf(categoryfilterText)!==-1):value;
  }

}
