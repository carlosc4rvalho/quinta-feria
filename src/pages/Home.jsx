import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeFilter from '../components/RecipeFilter';
import Recipe from '../components/Recipe';

const recipes = [
  { id: '1', name: 'Receita 1', description: 'Descrição da Receita 1', status: 'in_progress' },
  { id: '2', name: 'Receita 2', description: 'Descrição da Receita 2', status: 'draft' },
  { id: '3', name: 'Receita 3', description: 'Descrição da Receita 3', status: 'completed' },
  { id: '4', name: 'Receita 4', description: 'Descrição da Receita 4', status: 'in_progress' },
  { id: '5', name: 'Receita 5', description: 'Descrição da Receita 5', status: 'draft' },
];

const user = {
  name: 'Carlos',
};

function Home() {
  const [filter, setFilter] = useState('in_progress');

  const filteredRecipes = recipes.filter(recipe => recipe.status === filter);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleEdit = (recipeId) => {
    console.log('Edit recipe with id:', recipeId);
  };

  const handleAddRecipe = () => {
    console.log('Navigate to Add Recipe screen');
    navigation.navigate('AddRecipe');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Bom dia, {user.name}!</Text>
      <RecipeFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      {filteredRecipes.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>Nenhuma receita cadastrada.</Text>
          <TouchableOpacity style={styles.addButton} onPress={handleAddRecipe}>
            <Text style={styles.addButtonText}>Cadastrar Nova Receita</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Recipe
              name={item.name}
              description={item.description}
              status={item.status}
              onEdit={() => handleEdit(item.id)}
            />
          )}
          ListEmptyComponent={<Text>Nenhuma receita encontrada.</Text>}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    marginBottom: 20,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    marginBottom: 20,
  },
  addButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: 'blue',
    borderRadius: 8,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;