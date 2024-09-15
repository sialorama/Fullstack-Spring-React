package fr.backendapp.repository;

import fr.backendapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    // Vous pouvez ajouter des méthodes personnalisées ici si nécessaire
}
