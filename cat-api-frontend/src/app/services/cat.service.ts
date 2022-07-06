import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { Cat } from '../shared/cat.model';

@Injectable({ providedIn: 'root' })
export class CatService {

    private readonly basicCatUrl: string = 'https://api.thecatapi.com/v1/';

    private _currentCatsSubject: BehaviorSubject<Cat[]>;
    private _currentCats$: Observable<Cat[]>;

    constructor(private _http: HttpClient) {
        this._currentCatsSubject = new BehaviorSubject<Cat[]>([]);
        this._currentCats$ = this._currentCatsSubject.asObservable();
    }

    public get cats$(): Observable<Cat[]> {
        return this._currentCats$;
    }

    getCatImages(catNumber: number): void {
        this._http.get<any>(this.basicCatUrl + 'images/search?limit=' + catNumber)
            .pipe(map((response) => {
                console.log(response);
                let cats: Cat[] = [];

                for (let cat of response) {
                    cats.push({ breed: '', imgSrc: cat.url });
                }

                this._currentCatsSubject.next(cats);

                return cats;
            })).subscribe(r => console.log(r));;
    }
}