import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';

export default function App() {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [winner, setWinner] = useState('');

  const addScore = (team) => {
    if (team === 'A') {
      const newScore = scoreTeamA + 1;
      setScoreTeamA(newScore);
      if (newScore === 10) {
        setWinner('Team A');
        Alert.alert('Game Over', 'Team A Wins!');
      }
    } else {
      const newScore = scoreTeamB + 1;
      setScoreTeamB(newScore);
      if (newScore === 10) {
        setWinner('Team B');
        Alert.alert('Game Over', 'Team B Wins!');
      }
    }
  };

  const subtractScore = (team) => {
    if (team === 'A') {
      setScoreTeamA(scoreTeamA > 0 ? scoreTeamA - 1 : 0);
    } else {
      setScoreTeamB(scoreTeamB > 0 ? scoreTeamB - 1 : 0);
    }
  };

  const resetScores = () => {
    setScoreTeamA(0);
    setScoreTeamB(0);
    setWinner('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>UIR Futsal Scoreboard</Text>
      </View>

      {/* Confetti */}
      {winner !== '' && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fadeOut={true}
        />
      )}

      <View style={styles.scoreboard}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team A</Text>
          <Text style={styles.score}>{scoreTeamA}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => addScore('A')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => subtractScore('A')}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.teamContainer}>
          <Text style={styles.teamName}>Team B</Text>
          <Text style={styles.score}>{scoreTeamB}</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => addScore('B')}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => subtractScore('B')}
            >
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {winner !== '' && <Text style={styles.winner}>{winner} Wins!</Text>}

      <TouchableOpacity style={styles.resetButton} onPress={resetScores}>
        <Text style={styles.resetButtonText}>Reset Match</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B263B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#1F4068',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  scoreboard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '90%',
  },
  teamContainer: {
    alignItems: 'center',
    backgroundColor: '#162447',
    padding: 20,
    borderRadius: 10,
    width: '45%',
  },
  teamName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  score: {
    color: '#FFF',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1F4068',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
  winner: {
    color: '#F2A365',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  resetButton: {
    backgroundColor: '#E43F5A',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
