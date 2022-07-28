const randomInteger = (min: number, max: number) => Math.round(min + Math.random() * (max - min));

const timeout = (ms: number) => new Promise((resolve) => { setTimeout(() => resolve({}), ms); });

export { randomInteger, timeout };
