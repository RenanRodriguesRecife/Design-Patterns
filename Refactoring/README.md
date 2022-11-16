# Refatoração 

O código deve ser fácil de entender e fácil de extender

Códigos fáceis de entender se gasta menos tempo consertando bugs 

### Bad Smells:
- Pouco Claro
- Complicado
- Duplicado

### Códigos Duplicados

### Métodos longos

Os métodos devem ser quebrados em métodos menores (não é bom ser maiores que 10 linhas o ideal é ter no máximo 5 linhas de código)

### Declarações condicionais complexas

Dificulta a sua capacidade de entender o sistema e de reusa-lo

### IF/Else e Switch devem ser eliminados

Se eles deixam seu sistema restrito devem ser eliminados usando Polimorfismo de objetos (ou funções se você estiver no JavaScript)

### Soluções Excêntricas 

Solucionar o mesmo problema em muitas maneiras diferentes. (Só se deve escolher a melhor única solução)


# Orientação a Objetos

-> Obsessão com Primitivas (JAVA)

Usar variáveis primitivas você foge do propósito da orientação a objetos

-> Exposição Indecentes

Métodos, variáveis e classes que estão visíveis quando deveriam ser privadas

-> Solução espalhada

Quando um código é feito para solucionar um problema está espalhado em várias classes.

-> Classes alternativas com interfaces diferentes

Interfaces de classes diferentes são diferentes mas a classe em si não são diferentes. Nesse caso é melhor refatorar as duas interfaces diferentes em uma só.

-> Classes Preguiçosas

Classes que não fazem muita coisa por conta própria e sua capacidades podem ser movidas para outras classes.

-> Classes Grandes

Classes que fazem muita coisa. (uma maneira fácil de detectar, é verificar que você está
usando instâncias dessa classe muitas vezes repetidamente para resolver diferentes problemas)

-> Explosões combinatórias

Quando você usa muitos métodos para realizar ações que poderiam ser feitas por um métodos que não é tão especializado. 

Ex: Criar métodos para cada consulta no banco de dados ao invés de criar um método que poderia aguentar várias consultas. 




https://www.youtube.com/watch?v=vhYK3pDUijk&list=PLGLfVvz_LVvSuz6NuHAzpM52qKM6bPlCV&index=1
