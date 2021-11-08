Refatoração 

O código deve ser fácil de entender e fácil de extender

Códigos fáceis de entender se gasta menos tempo consertando bugs 

Bad Smells:
- Pouco Claro
- Complicado
- Duplicado

-> Códigos Duplicados

-> Métodos longos

Os métodos devem ser quebrados em métodos menores (não é bom ser maiores que 10 linhas o ideal é ter no máximo 5 linhas de código)

-> Declarações condicionais complexas
Dificulta a sua capacidade de entender o sistema e de reusa-lo

Orientação a Objetos

-> Obsessão com Primitivas (JAVA)

Usar variáveis primitivas você foge do propósito da orientação a objetos

-> Exposição Indecentes

Métodos, variáveis e classes que estão visíveis quando deveriam ser privadas

-> Solução espalhada

Quando um código é feito para solucionar um problema está espalhado em várias classes.

-> Classes alternativas com interfaces diferentes

Interfaces de classes diferentes são diferentes mas a classe em si não são diferentes. Nesse caso é melhor refatorar as duas interfaces diferentes em uma só.





https://www.youtube.com/watch?v=vhYK3pDUijk&list=PLGLfVvz_LVvSuz6NuHAzpM52qKM6bPlCV&index=1