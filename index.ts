export interface IFluentProperty<T, TH> {
    (value?: T): T | TH;
}

export function CreateFluentProperty<T, TH>(host: TH, settings: { initialValue?: T } = {}): IFluentProperty<T, TH> {
    let storage: { value?: T } = {};
    let prop = (value?: T): T | TH => {
        if (value !== undefined) {
            storage.value = value;
            return host;
        } else {
            return storage.value;
        }
    };

    storage.value = settings.initialValue;
    return prop;
}
