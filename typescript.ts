// 申明类型
let str: string =  '1' 

// 类型断言 as number
let numArr = [1, 2, 3]
const result = numArr.find(item => item > 2) as number
result * 5

// 基础类型和联合类型
let v1: string = 'abc'
let v2: number = 10
let v3: boolean = true
let nu: null = null
let un: undefined = undefined
let v4: string | null = null
let v5: 1 | 2 | 3 = 2

// 数组，元组，枚举
let arr: number[] = [1, 2, 3]
let arr1: Array<string> = ['a', 'b', '4']

let t1: [number, string, number?] = [1, '1', 1] // 元组 ?是可选，类似any
// (枚举)
enum MyEnum {
    A,
    B,
    C
}
MyEnum.A 
MyEnum[0]

// 函数 void 和 undefined, ?是可选参数
function MyFn(params:number, b?: string): void {
    // return params
    return undefined
}

// 接口-对象用
interface Obj {
    name: string,
    age: number
}

const obj: Obj = {
    name: '111',
    age: 12
}

type MyUserName = string | number
let a: MyUserName = 'lucy' // let a: string | number = 10

type MyUserName2 = 1 | 2 | 3
let b: MyUserName2 = 3

// 泛型 尖括号
function fanxing<T>(a: T, b: T): T[] {
    return [a, b]
}
fanxing<number>(1, 2)
fanxing('a', 'b') // TS做的类型推断

// 进阶————————————————————————————————————————————————————
// 函数重载 同名函数，根据参数类型个数不同，实现函数重载
function hello(name:string): string
function hello(age:number): string
function hello(value: string | number): string {
    if (typeof value === 'string') {
        return 'name'
    } else {
        return 'age'
    }
}
hello('abc')
hello(18)

// 接口继承

interface Parent {
    p1: string,
    p2: number
}

interface Child extends Parent {
    p3: string
}

const obj1: Child = {
    p1: '1',
    p2: 3,
    p3: '6'
}

// 类
class Student {
    public name: string
    age: number
    private aaa?: string // 只能在类内部访问
    protected bbb?: string // 只能在类和其子类内部访问
    static ccc?: string // 类外面调用，如Student.ccc
    readonly ddd?: string // 只读属性
    protected static ddd?: string // 多修饰组合
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const lucy = new Student('lucy', 18)
// lucy.aaa aaa为私有属性，不可访问,只能在类本身里访问


 