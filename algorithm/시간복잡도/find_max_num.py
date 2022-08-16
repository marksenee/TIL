# -*- coding: utf-8 -*-

# 최대값 찾기 알고리즘의 시간 복잡도 판단하기 

input = [3,5,7,1,2,5]

def max_num(array) :
    for num in array: # array의 길이만큼 아래 연산이 실행 
        for compare_num in array: # array의 길이만큼 아래 연산이 실행 
            if num < compare_num: # 비교 연산 1번 실행 
                break
            else:
                return num
            
result = max_num(input)

print(max_num([3, 5, 6, 1, 2, 4])) 
print( max_num([6, 6, 6]))
print(max_num([6, 9, 2, 7, 1888]))

def find_max_num(array):
    max_num = array[0] 
    print("max", max_num)       
    for num in array:  # array의 길이만큼 아래 연산이 실행됨    
        if num > max_num:  # 비교 연산 1번 실행 
            max_num = num # 대입 연산 1번 실행 
    return max_num

result = find_max_num(input)
print(find_max_num([3, 5, 6, 1, 2, 4]))
print(find_max_num([6, 6, 6]))
print(find_max_num([6, 9, 2, 7, 1888]))