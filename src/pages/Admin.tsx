import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Trash2, Edit, Plus, Dog, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Dog {
  id: string;
  name: string;
  breed: string;
  age: string;
  gender: string;
  color: string;
  weight: string;
  description: string;
  status: 'available' | 'breeding' | 'sold';
  imageUrl: string;
  price: string;
}

const Admin = () => {
  const { toast } = useToast();
  const { user, session, loading, signOut } = useAuth();
  const navigate = useNavigate();

  // Redirect to auth if not authenticated
  useEffect(() => {
    if (!loading && !session) {
      navigate('/auth');
    }
  }, [loading, session, navigate]);

  // Show loading while checking auth
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Dog className="h-12 w-12 animate-spin mx-auto mb-4 text-primary" />
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  // Don't render if not authenticated
  if (!session) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };
  const [dogs, setDogs] = useState<Dog[]>([
    {
      id: "1",
      name: "Rex",
      breed: "American Bully",
      age: "2 anos",
      gender: "Macho",
      color: "Azul",
      weight: "35kg",
      description: "Cão excepcional com linhagem premium",
      status: "available",
      imageUrl: "/src/assets/american-bully-micro.jpg",
      price: "R$ 5.000"
    },
    {
      id: "2", 
      name: "Luna",
      breed: "French Bulldog",
      age: "1 ano",
      gender: "Fêmea",
      color: "Cream",
      weight: "12kg",
      description: "Fêmea linda com temperamento dócil",
      status: "breeding",
      imageUrl: "/src/assets/french-bulldog.jpg",
      price: "R$ 8.000"
    }
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingDog, setEditingDog] = useState<Dog | null>(null);
  const [formData, setFormData] = useState<Partial<Dog>>({
    name: "",
    breed: "",
    age: "",
    gender: "",
    color: "",
    weight: "",
    description: "",
    status: "available",
    imageUrl: "",
    price: ""
  });

  const resetForm = () => {
    setFormData({
      name: "",
      breed: "",
      age: "",
      gender: "",
      color: "",
      weight: "",
      description: "",
      status: "available",
      imageUrl: "",
      price: ""
    });
    setEditingDog(null);
  };

  const openDialog = (dog?: Dog) => {
    if (dog) {
      setEditingDog(dog);
      setFormData(dog);
    } else {
      resetForm();
    }
    setIsDialogOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.breed) {
      toast({
        title: "Erro",
        description: "Nome e raça são obrigatórios",
        variant: "destructive"
      });
      return;
    }

    if (editingDog) {
      setDogs(dogs.map(dog => dog.id === editingDog.id ? { ...dog, ...formData } : dog));
      toast({
        title: "Sucesso",
        description: "Dog atualizado com sucesso!"
      });
    } else {
      const newDog: Dog = {
        ...formData as Dog,
        id: Date.now().toString()
      };
      setDogs([...dogs, newDog]);
      toast({
        title: "Sucesso", 
        description: "Dog adicionado com sucesso!"
      });
    }

    setIsDialogOpen(false);
    resetForm();
  };

  const deleteDog = (id: string) => {
    setDogs(dogs.filter(dog => dog.id !== id));
    toast({
      title: "Sucesso",
      description: "Dog removido com sucesso!"
    });
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      available: "bg-success text-success-foreground",
      breeding: "bg-accent text-accent-foreground", 
      sold: "bg-muted text-muted-foreground"
    };
    
    const labels = {
      available: "Disponível",
      breeding: "Reprodução",
      sold: "Vendido"
    };

    return (
      <Badge className={variants[status as keyof typeof variants]}>
        {labels[status as keyof typeof labels]}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Dog className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold text-foreground">Painel Administrativo</h1>
              <p className="text-muted-foreground">Bem-vindo, {user?.email}</p>
            </div>
          </div>
          
          <Button variant="outline" onClick={handleSignOut} className="gap-2">
            <LogOut className="h-4 w-4" />
            Sair
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Gerenciar Dogs</CardTitle>
                <CardDescription>
                  Adicione, edite ou remova dogs do seu canil
                </CardDescription>
              </div>
              
              <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogTrigger asChild>
                  <Button onClick={() => openDialog()} className="gap-2">
                    <Plus className="h-4 w-4" />
                    Adicionar Dog
                  </Button>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle>
                      {editingDog ? "Editar Dog" : "Adicionar Novo Dog"}
                    </DialogTitle>
                    <DialogDescription>
                      Preencha as informações do dog
                    </DialogDescription>
                  </DialogHeader>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="breed">Raça *</Label>
                        <Select value={formData.breed} onValueChange={(value) => setFormData({...formData, breed: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione a raça" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="American Bully">American Bully</SelectItem>
                            <SelectItem value="French Bulldog">French Bulldog</SelectItem>
                            <SelectItem value="Exotic Bully">Exotic Bully</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="age">Idade</Label>
                        <Input
                          id="age"
                          value={formData.age}
                          onChange={(e) => setFormData({...formData, age: e.target.value})}
                          placeholder="ex: 2 anos"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="gender">Sexo</Label>
                        <Select value={formData.gender} onValueChange={(value) => setFormData({...formData, gender: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione o sexo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Macho">Macho</SelectItem>
                            <SelectItem value="Fêmea">Fêmea</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="color">Cor</Label>
                        <Input
                          id="color"
                          value={formData.color}
                          onChange={(e) => setFormData({...formData, color: e.target.value})}
                          placeholder="ex: Azul, Cream"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="weight">Peso</Label>
                        <Input
                          id="weight"
                          value={formData.weight}
                          onChange={(e) => setFormData({...formData, weight: e.target.value})}
                          placeholder="ex: 25kg"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="price">Preço</Label>
                        <Input
                          id="price"
                          value={formData.price}
                          onChange={(e) => setFormData({...formData, price: e.target.value})}
                          placeholder="ex: R$ 5.000"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="status">Status</Label>
                        <Select value={formData.status} onValueChange={(value) => setFormData({...formData, status: value as Dog['status']})}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="available">Disponível</SelectItem>
                            <SelectItem value="breeding">Reprodução</SelectItem>
                            <SelectItem value="sold">Vendido</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="imageUrl">URL da Imagem</Label>
                      <Input
                        id="imageUrl"
                        value={formData.imageUrl}
                        onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
                        placeholder="https://exemplo.com/imagem.jpg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Descrição</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        placeholder="Descreva as características do dog"
                        rows={3}
                      />
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <Button type="submit">
                        {editingDog ? "Atualizar" : "Adicionar"}
                      </Button>
                      <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                        Cancelar
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>Raça</TableHead>
                  <TableHead>Idade</TableHead>
                  <TableHead>Sexo</TableHead>
                  <TableHead>Preço</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Ações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dogs.map((dog) => (
                  <TableRow key={dog.id}>
                    <TableCell className="font-medium">{dog.name}</TableCell>
                    <TableCell>{dog.breed}</TableCell>
                    <TableCell>{dog.age}</TableCell>
                    <TableCell>{dog.gender}</TableCell>
                    <TableCell>{dog.price}</TableCell>
                    <TableCell>{getStatusBadge(dog.status)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => openDialog(dog)}
                          className="gap-1"
                        >
                          <Edit className="h-3 w-3" />
                          Editar
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteDog(dog.id)}
                          className="gap-1"
                        >
                          <Trash2 className="h-3 w-3" />
                          Excluir
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;